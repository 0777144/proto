

export function welcome(text) {
    return Promise.resolve(Object.assign({}, {[text + '_' + text]: text}))
}
