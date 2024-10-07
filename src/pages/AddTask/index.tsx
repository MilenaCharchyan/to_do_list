import React, { useState } from "react";
import { addTask } from "../../features/task/taskSlice";
import { useDispatch } from "react-redux";
import * as Yup from 'yup';
import { useForm } from "react-hook-form";
import { ITask } from "../../type/type";
import './style.css'

const validationSchema = Yup.object({
    name: Yup.string().required('Task name is required'),
    description: Yup.string().max(200, 'Description must be at most 200 characters long').required("Task description is required"),
});

export const AddTask: React.FC = React.memo((): JSX.Element => {
    const dispatch = useDispatch()
    const { register, handleSubmit, reset } = useForm<ITask>();

    const [errors, setErrors] = useState<{ name?: string; description?: string }>({});

    const handleAddTask = async (data: ITask) => {
        try {
            await validationSchema.validate(data, { abortEarly: false });

            dispatch(addTask({ ...data, done: false, id: Date.now() }));
            reset();
            setErrors({});
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const newErrors: { name?: string; description?: string } = {};
                err.inner.forEach((error) => {
                    if (error.path === 'name') newErrors.name = error.message;
                    if (error.path === 'description') newErrors.description = error.message;
                });
                setErrors(newErrors);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit(handleAddTask)} className="add-task-container">
            <h4>Add Task
                <input
                    type="text"
                    placeholder="Task Name"
                    {...register('name')}
                    className="input"
                />
                {errors.name && <span className="error">{errors.name}</span>}
                <textarea
                    placeholder="Task Description"
                    {...register('description')}
                    className="textarea"
                />
                {errors.description && <span className="error">{errors.description}</span>}
                
                <button type="submit" className="add-task-btn">Add Task</button>
            </h4>
        </form>
    );
});