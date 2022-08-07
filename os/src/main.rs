#![no_std]
#![no_main]
#![feature(panic_info_message)]
#![feature(alloc_error_handler)]

extern crate alloc;

#[macro_use]
extern crate bitflags;

// #[cfg(feature = "board_k210")]
// #[path = "boards/k210.rs"]
// mod board;
// #[cfg(not(any(feature = "board_k210")))]
// #[path = "board/qemu.rs"]
// mod board::qemu;

#[macro_use]
mod console;
mod board;
mod config;
mod drivers;
mod fs;
mod lang_items;
mod mm;
mod sbi;
mod sync;
mod syscall;
mod task;
mod timer;
mod trap;
// use board::*;

core::arch::global_asm!(include_str!("entry.asm"));

fn clear_bss() {
    extern "C" {
        fn sbss();
        fn ebss();
    }
    kprintln!("[KERN] clear_bss() begin");
    unsafe {
        core::slice::from_raw_parts_mut(sbss as usize as *mut u8, ebss as usize - sbss as usize)
            .fill(0);
    }
    kprintln!("[KERN] clear_bss() end");
}

use lazy_static::*;
use sync::UPIntrFreeCell;

lazy_static! {
    pub static ref DEV_NON_BLOCKING_ACCESS: UPIntrFreeCell<bool> = {
        kprintln!("[KERN] main::lazy_static!DEV_NON_BLOCKING_ACCESS begin");
        unsafe { UPIntrFreeCell::new(false) }
    };
}

#[no_mangle]
pub fn rust_main() -> ! {
    kprintln!("[KERN] rust_main() begin");
    clear_bss();
    mm::init();
    trap::init();
    trap::enable_timer_interrupt();
    timer::set_next_trigger();
    board::device_init();
    fs::list_apps();
    task::add_initproc();
    *DEV_NON_BLOCKING_ACCESS.exclusive_access() = true;
    task::run_tasks();
    panic!("[KERN] Unreachable in rust_main!");
}
