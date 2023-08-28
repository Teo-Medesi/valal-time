"use server";

import { revalidatePath as revalidate } from "next/cache";

const revalidatePath = async (path) => {
    revalidate(path);
}

const getBranches = async (user_id, provider_token) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/users/${user_id}/branches`, {
        headers: {
            "Cookie": provider_token
        }
    });
    const { data } = await response.json();

    return data;
}

const getProjects = async (user_id, branch_id) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/users/${user_id}/branches/${branch_id}/projects`);
    const { data } = await response.json();
    
    return data;
}

const getTasks = async (user_id, branch_id, project_id) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/users/${user_id}/branches/${branch_id}/projects/${project_id}/tasks`);
    const { data } = await response.json();
    
    return data;
}

const getTodos = async (user_id, branch_id, project_id, task_id) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/users/${user_id}/branches/${branch_id}/projects/${project_id}/tasks/${task_id}/todos`);
    const { data } = await response.json();
    
    return data;
}

const getLabels = async (user_id, branch_id, project_id, task_id) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/users/${user_id}/branches/${branch_id}/projects/${project_id}/tasks/${task_id}/labels`);
    const { data } = await response.json();
    
    return data;
}

export {
    getBranches,
    getProjects,
    getTasks,
    getTodos,
    getLabels,
    revalidatePath
}

