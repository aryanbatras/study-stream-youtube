import { createSignal, createEffect, onMount, For, JSX } from "solid-js";
import { FaSolidPlus, FaSolidTrash } from "solid-icons/fa";

type Task = {
    id: string;
    text: string;
    completed: boolean;
    createdAt: number;
};

const STORAGE_KEY = "study-tasks-v1";

export default function TaskManager(): JSX.Element {
    const [tasks, setTasks] = createSignal<Task[]>([]);
    const [newTask, setNewTask] = createSignal("");
    const [isOpen, setIsOpen] = createSignal(false);

    // Load saved tasks
    onMount(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            try {
                setTasks(JSON.parse(saved));
            } catch {
                setTasks([]);
                localStorage.removeItem(STORAGE_KEY);
            }
        }
    });

    // Persist tasks
    createEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks()));
    });

    const addTask = (e: Event) => {
        e.preventDefault();
        const text = newTask().trim();
        if (!text) return;

        const t: Task = {
            id: Date.now().toString(),
            text,
            completed: false,
            createdAt: Date.now(),
        };

        setTasks(prev => [t, ...prev]);
        setNewTask("");
    };

    const toggleTask = (id: string) =>
        setTasks(prev =>
            prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t))
        );

    const deleteTask = (id: string) =>
        setTasks(prev => prev.filter(t => t.id !== id));

    const clearCompleted = () =>
        setTasks(prev => prev.filter(t => !t.completed));

    const activeTasks = () => tasks().filter(t => !t.completed);
    const completedTasks = () => tasks().filter(t => t.completed);

    return (
        <div class="fixed bottom-4 left-4 z-30">
            {!isOpen() ? (
                <button
                    onClick={() => setIsOpen(true)}
                    class="bg-white/95 text-gray-900 backdrop-blur-sm rounded-full shadow-lg p-3 hover:shadow-xl transition-all duration-200"
                    title="My Tasks"
                >
                    <div class="w-6 h-6 flex items-center justify-center">
                        <div class="relative">
                            <div class="w-4 h-4 border-2 border-emerald-500 rounded-sm"></div>
                            {activeTasks().length > 0 && (
                                <span class="absolute -top-2 -right-2 bg-emerald-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                                    {activeTasks().length}
                                </span>
                            )}
                        </div>
                    </div>
                </button>
            ) : (
                <div class="bg-white/95 text-gray-900 backdrop-blur-sm rounded-xl shadow-xl w-72 transition-all duration-200 overflow-hidden">
                    {/* Header */}
                    <div class="p-4 border-b border-gray-200">
                        <div class="flex justify-between items-center">
                            <h3 class="font-semibold text-lg text-gray-900">My Tasks</h3>
                            <button
                                onClick={() => setIsOpen(false)}
                                class="text-gray-500 hover:text-gray-700 text-xl leading-none"
                            >
                                ×
                            </button>
                        </div>

                        {/* Add Task */}
                        <form onSubmit={addTask} class="mt-3 flex">
                            <input
                                type="text"
                                value={newTask()}
                                onInput={(e) => setNewTask((e.target as HTMLInputElement).value)}
                                placeholder="Add a task..."
                                class="flex-1 px-3 py-2 text-sm text-gray-900 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-emerald-500"
                            />
                            <button
                                type="submit"
                                class="bg-emerald-500 text-white px-3 py-2 rounded-r-md hover:bg-emerald-600 transition-colors"
                            >
                                <FaSolidPlus size={14} />
                            </button>
                        </form>
                    </div>

                    {/* Tasks List */}
                    <div class="max-h-80 overflow-y-auto text-gray-900">
                        {tasks().length === 0 ? (
                            <div class="p-4 text-center text-gray-500 text-sm">
                                No tasks yet — add one above.
                            </div>
                        ) : (
                            <>
                                {/* Active Tasks */}
                                <For each={activeTasks()}>
                                    {(task) => (
                                        <div class="p-3 border-b border-gray-200 flex items-center group">
                                            <input
                                                type="checkbox"
                                                checked={task.completed}
                                                onChange={() => toggleTask(task.id)}
                                                class="h-4 w-4 text-emerald-500 rounded border-gray-300 focus:ring-emerald-500"
                                            />
                                            <span class="ml-3 text-sm flex-1 text-gray-900">
                                                {task.text}
                                            </span>

                                            <button
                                                onClick={() => deleteTask(task.id)}
                                                class="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 transition-opacity"
                                            >
                                                <FaSolidTrash size={12} />
                                            </button>
                                        </div>
                                    )}
                                </For>

                                {/* Completed Tasks */}
                                {completedTasks().length > 0 && (
                                    <>
                                        <div class="px-3 py-2 text-xs font-medium text-gray-600 bg-gray-100">
                                            Completed ({completedTasks().length})
                                        </div>

                                        <For each={completedTasks()}>
                                            {(task) => (
                                                <div class="p-3 border-b border-gray-200 flex items-center group">
                                                    <input
                                                        type="checkbox"
                                                        checked={task.completed}
                                                        onChange={() => toggleTask(task.id)}
                                                        class="h-4 w-4 text-emerald-500 rounded border-gray-300 focus:ring-emerald-500"
                                                    />
                                                    <span class="ml-3 text-sm text-gray-500 line-through flex-1">
                                                        {task.text}
                                                    </span>

                                                    <button
                                                        onClick={() => deleteTask(task.id)}
                                                        class="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 transition-opacity"
                                                    >
                                                        <FaSolidTrash size={12} />
                                                    </button>
                                                </div>
                                            )}
                                        </For>
                                    </>
                                )}
                            </>
                        )}
                    </div>

                    {/* Clear Completed */}
                    {completedTasks().length > 0 && (
                        <div class="p-3 bg-gray-100 border-t border-gray-200 text-right">
                            <button
                                onClick={clearCompleted}
                                class="text-xs text-gray-600 hover:text-red-600"
                            >
                                Clear completed
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
