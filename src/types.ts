export default interface Task {
    id: number;
    description: string;
    completed: boolean;
}

export type FilterOption = 'All' | 'Completed' | 'Active';