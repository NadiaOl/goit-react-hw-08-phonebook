
const baseURL = "https://64880bf10e2469c038fcd6c2.mockapi.io";

export const getContacts = async () => {
    const data = await fetch(`${baseURL}/contacts`);
    return await data.json();
}

export const createContact = async (data) => {
    const response = await fetch(`${baseURL}/contacts`, {
        body: JSON.stringify(data)
    });
        return await response.json();
};

export const delContact = async (id) => {
    const response = await fetch(`${baseURL}/contacts/${id}`);
        return await response.json();
}
