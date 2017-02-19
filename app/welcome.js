

export function welcome(text) {
    // return Promise.resolve({[text + '_' + text]: text});
    return {[text + '_' + text]: text};
}
