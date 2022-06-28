export default (defaultNight = false) => {
    // defaultNight is the 'default'
    return localStorage.getItem('darkmode') != null ?
        localStorage.getItem('darkmode') === 'true' : (window.matchMedia != null ?
        window.matchMedia('(prefers-color-scheme: dark)').matches : defaultNight)
}