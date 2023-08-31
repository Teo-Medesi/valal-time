"use server";
import { revalidatePath as revalidate } from "next/cache";
import { headers } from "next/headers";

const revalidatePath = async (path) => {
    revalidate(path);
}

const getBranches = async (user_id) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/users/${user_id}/branches`, {next: {revalidate: 0} , headers: headers()});
    const { data } = await response.json();

    return data || [];
}

const createBranch = async (user_id, name, description) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/users/${user_id}/branches`, {
        method: "POST",
        body: JSON.stringify({name, description}),
        headers: headers()
    });

    const data = await response.json();
}

const getProjects = async (user_id, branch_id) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/users/${user_id}/branches/${branch_id}/projects`, {headers: headers()});
    const { data } = await response.json();
    
    return data || [];
}

const getTasks = async (user_id, branch_id, project_id) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/users/${user_id}/branches/${branch_id}/projects/${project_id}/tasks`, {headers: headers()});
    const { data } = await response.json();
    
    return data;
}

const getTodos = async (user_id, branch_id, project_id, task_id) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/users/${user_id}/branches/${branch_id}/projects/${project_id}/tasks/${task_id}/todos`, {headers: headers()});
    const { data } = await response.json();
    
    return data;
}

const getLabels = async (user_id, branch_id, project_id, task_id) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/users/${user_id}/branches/${branch_id}/projects/${project_id}/tasks/${task_id}/labels`, {headers: headers()});
    const { data } = await response.json();
    
    return data;
}

export {
    getBranches,
    createBranch,
    getProjects,
    getTasks,
    getTodos,
    getLabels,
    revalidatePath
}

