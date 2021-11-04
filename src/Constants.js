const prod = {
    url: {
        API_URL: 'https://gh-trending-api.herokuapp.com/',
    }
};
const dev = {
    url: {
        API_URL: 'https://gh-trending-api.herokuapp.com/',
    }
};

export const config = process.env.NODE_ENV === "development" ? dev : prod;