//selectors

export const getAllCategories =(state) =>state.categories;

const createActionName = (actionName) => `app/categories/${actionName}`;
const SET_CATEGORIES = createActionName('SET_CATEGORIES');

export const setCategories =(payload) => ({
    type:SET_CATEGORIES,
    payload,
});

const categoriesReducer = (statePart = [], action) => {
    switch (action.type) {
        case SET_CATEGORIES:
            return action.payload;
        default:
            return statePart;
    }
};

export default categoriesReducer;