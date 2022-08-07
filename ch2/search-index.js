var searchIndex = JSON.parse('{\
"os":{"doc":"The main module and entrypoint","t":[0,0,5,0,0,14,14,5,0,0,0,0,17,3,17,3,7,17,3,17,7,17,3,12,12,11,11,11,11,11,11,11,11,12,12,12,11,11,11,11,11,11,11,11,5,11,11,11,11,11,11,12,5,11,11,5,11,11,11,11,11,11,11,11,11,11,11,11,17,17,17,17,8,17,3,17,12,11,11,10,11,5,10,11,10,11,11,11,11,11,11,11,3,11,11,11,11,5,11,11,11,11,5,17,5,5,5,2,0,3,11,11,11,11,12,11,11,11,11,11,17,17,0,0,5,17,5,5,3,0,5,12,12,5,12,3,11,11,11,11,11,12,11,12,11,11,11,12],"n":["batch","board","clear_bss","console","lang_items","print","println","rust_main","sbi","sync","syscall","trap","APP_BASE_ADDRESS","APP_MANAGER","APP_SIZE_LIMIT","AppManager","KERNEL_STACK","KERNEL_STACK_SIZE","KernelStack","MAX_APP_NUM","USER_STACK","USER_STACK_SIZE","UserStack","__private_field","app_start","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","current_app","data","data","deref","from","from","from","from","get_current_app","get_sp","get_sp","init","into","into","into","into","load_app","move_to_next_app","num_app","print_app_info","print_app_info","push_context","run_next_app","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","EXIT_FAILURE","EXIT_FAILURE_FLAG","EXIT_RESET","EXIT_SUCCESS","QEMUExit","QEMU_EXIT_HANDLE","RISCV64","VIRT_TEST","addr","borrow","borrow_mut","exit","exit","exit_code_encode","exit_failure","exit_failure","exit_success","exit_success","from","into","new","try_from","try_into","type_id","Stdout","borrow","borrow_mut","from","into","print","try_from","try_into","type_id","write_str","panic","SBI_CONSOLE_PUTCHAR","console_putchar","sbi_call","shutdown","UPSafeCell","up","UPSafeCell","borrow","borrow_mut","exclusive_access","from","inner","into","new","try_from","try_into","type_id","SYSCALL_EXIT","SYSCALL_WRITE","fs","process","syscall","FD_STDOUT","sys_write","sys_exit","TrapContext","context","init","sepc","sstatus","trap_handler","x","TrapContext","app_init_context","borrow","borrow_mut","from","into","sepc","set_sp","sstatus","try_from","try_into","type_id","x"],"q":["os","","","","","","","","","","","","os::batch","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","os::board","","","","","","","","","","","","","","","","","","","","","","","","os::console","","","","","","","","","","os::lang_items","os::sbi","","","","os::sync","","os::sync::up","","","","","","","","","","","os::syscall","","","","","os::syscall::fs","","os::syscall::process","os::trap","","","","","","","os::trap::context","","","","","","","","","","","",""],"d":["batch subsystem","","clear BSS segment","SBI console driver, for text output","The panic handler","print string macro","println string macro","the rust entry-point of os","SBI call wrappers","Synchronization and interior mutability primitives","Implementation of syscalls","Trap handling functionality","","","","","","","","","","","","","","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","","","","init batch subsystem","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","","print apps info","","","run next app","","","","","","","","","","","","","","","","","","","RISCV64 configuration","","Address of the sifive_test mapped device.","","","Exit with specified return code.","Exit qemu with specified exit code.","Encode the exit code using EXIT_FAILURE_FLAG.","Exit QEMU using <code>EXIT_FAILURE</code>, aka <code>1</code>.","","Exit QEMU using <code>EXIT_SUCCESS</code>, aka <code>0</code>, if possible.","","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","Create an instance.","","","","","","","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","","","","","","","","use sbi call to putchar in console (qemu uart handler)","handle SBI call with <code>which</code> SBI_id and other arguments","use sbi call to shutdown the kernel","","Uniprocessor interior mutability primitives","Wrap a static data structure inside it so that we are able …","","","Exclusive access inner data in UPSafeCell. Panic if the …","Returns the argument unchanged.","inner data","Calls <code>U::from(self)</code>.","User is responsible to guarantee that inner struct is only …","","","","","","File and filesystem-related syscalls","App management syscalls","handle syscall exception with <code>syscall_id</code> and other …","","write buf of length <code>len</code>  to a file with <code>fd</code>","task exits and submit an exit code","Trap Context","","initialize CSR <code>stvec</code> as the entry of <code>__alltraps</code>","CSR sepc","CSR sstatus      ","handle an interrupt, exception, or system call from user …","general regs[0..31]","Trap Context","init app context","","","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","CSR sepc","set stack pointer to x_2 reg (sp)","CSR sstatus      ","","","","general regs[0..31]"],"i":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,4,6,7,4,2,6,7,4,2,4,6,7,2,6,7,4,2,4,6,7,0,6,7,4,2,4,4,4,0,4,6,0,6,7,4,2,6,7,4,2,6,7,4,2,0,0,0,0,0,0,0,0,12,12,12,23,12,0,23,12,23,12,12,12,12,12,12,12,0,15,15,15,15,0,15,15,15,15,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,8,8,0,8,0,8,8,8,8,8,8,8,8,8,8,8,8],"f":[0,0,[[]],0,0,0,0,[[],1],0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],0,0,0,[2,3],[[]],[[]],[[]],[[]],[4,5],[6,5],[7,5],[[]],[[]],[[]],[[]],[[]],[[4,5]],[4],0,[[]],[4],[[6,8],8],[[],1],[[],9],[[],9],[[],9],[[],9],[[],9],[[],9],[[],9],[[],9],[[],10],[[],10],[[],10],[[],10],0,0,0,0,0,0,0,0,0,[[]],[[]],[11,1],[[12,11],1],[11,11],[[],1],[12,1],[[],1],[12,1],[[]],[[]],[13,12],[[],9],[[],9],[[],10],0,[[]],[[]],[[]],[[]],[14],[[],9],[[],9],[[],10],[[15,16],17],[18,1],0,[5],[[5,5,5,5],5],[[],1],0,0,0,[[]],[[]],[3,19],[[]],0,[[]],[[],3],[[],9],[[],9],[[],10],0,0,0,0,[5,20],0,[[5,21,5],20],[22,1],0,0,[[]],0,0,[8,8],0,0,[[5,5],8],[[]],[[]],[[]],[[]],0,[[8,5]],0,[[],9],[[],9],[[],10],0],"p":[[15,"never"],[3,"APP_MANAGER"],[3,"UPSafeCell"],[3,"AppManager"],[15,"usize"],[3,"KernelStack"],[3,"UserStack"],[3,"TrapContext"],[4,"Result"],[3,"TypeId"],[15,"u32"],[3,"RISCV64"],[15,"u64"],[3,"Arguments"],[3,"Stdout"],[15,"str"],[6,"Result"],[3,"PanicInfo"],[3,"RefMut"],[15,"isize"],[15,"u8"],[15,"i32"],[8,"QEMUExit"]]}\
}');
if (typeof window !== 'undefined' && window.initSearch) {window.initSearch(searchIndex)};
if (typeof exports !== 'undefined') {exports.searchIndex = searchIndex};
