use super::{ProcessControlBlock, TaskControlBlock};
use crate::sync::UPIntrFreeCell;
use alloc::collections::{BTreeMap, VecDeque};
use alloc::sync::Arc;
use lazy_static::*;

pub struct TaskManager {
    ready_queue: VecDeque<Arc<TaskControlBlock>>,
}

/// A simple FIFO scheduler.
impl TaskManager {
    pub fn new() -> Self {
        Self {
            ready_queue: VecDeque::new(),
        }
    }
    pub fn add(&mut self, task: Arc<TaskControlBlock>) {
        self.ready_queue.push_back(task);
    }
    pub fn fetch(&mut self) -> Option<Arc<TaskControlBlock>> {
        self.ready_queue.pop_front()
    }
}

lazy_static! {
    pub static ref TASK_MANAGER: UPIntrFreeCell<TaskManager> = {
        kprintln!("[KERN] task::manager::lazy_static!TASK_MANAGER begin");
        unsafe { UPIntrFreeCell::new(TaskManager::new()) }
    };
}

lazy_static! {
    pub static ref PID2PCB: UPIntrFreeCell<BTreeMap<usize, Arc<ProcessControlBlock>>> = {
        kprintln!("[KERN] task::manager::lazy_static!PID2PCB begin");
        unsafe { UPIntrFreeCell::new(BTreeMap::new()) }
    };
}

pub fn add_task(task: Arc<TaskControlBlock>) {
    //kprintln!("[KERN] task::manager::add_task() begin");
    TASK_MANAGER.exclusive_access().add(task);
    //kprintln!("[KERN] task::manager::add_task() end");
}

pub fn fetch_task() -> Option<Arc<TaskControlBlock>> {
    //kprintln!("[KERN] task::manager::fetch_task() begin");
    TASK_MANAGER.exclusive_access().fetch()
}

pub fn pid2process(pid: usize) -> Option<Arc<ProcessControlBlock>> {
    let map = PID2PCB.exclusive_access();
    map.get(&pid).map(Arc::clone)
}

pub fn insert_into_pid2process(pid: usize, process: Arc<ProcessControlBlock>) {
    PID2PCB.exclusive_access().insert(pid, process);
}

pub fn remove_from_pid2process(pid: usize) {
    let mut map = PID2PCB.exclusive_access();
    if map.remove(&pid).is_none() {
        panic!("cannot find pid {} in pid2task!", pid);
    }
}
