

const tokenSplitter = (AuthHeader: string) => {
    return AuthHeader.split("Bearer")[1]?.trim();
}

export default tokenSplitter;