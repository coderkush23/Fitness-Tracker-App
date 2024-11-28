
// export const isUserLoggedIn = () => localStorage.getItem('userData')
export const isUserLoggedIn = () => localStorage.getItem(useJwt.jwtConfig.storageTokenKeyName)

//Get the Basic Roles of the app
export const Roles = Object.freeze({
    Admin: 1,
    Instructor: 2,
    client: 3
})

// Checks if the passed date is today
const isToday = date => {
    const today = new Date()
    return (
        /* eslint-disable operator-linebreak */
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
        /* eslint-enable */
    )
}

//Get the Session Storage Keys
export const SessionStorageKeys = Object.freeze({
    AccessToken: useJwt.jwtConfig.storageTokenKeyName,
    RefreshToken: useJwt.jwtConfig.storageRefreshTokenKeyName,
    UserData: useJwt.jwtConfig.storageUserDataKeyName,
    ThemeConfig: useJwt.jwtConfig.storageCustomThemeSettings
})

//Get the Session Storage Values
export const GetSessionStorageValue = (key) => {
    return localStorage.getItem(key)
}

//Get Browser Names
export const GetBrowserName = () => {
    const browserInfo = navigator.userAgent
    let browser
    if (browserInfo.includes('Opera') || browserInfo.includes('Opr')) {
        browser = 'Opera'
    } else if (browserInfo.includes('Edg')) {
        browser = 'Edge'
    } else if (browserInfo.includes('Chrome')) {
        browser = 'Chrome'
    } else if (browserInfo.includes('Safari')) {
        browser = 'Safari'
    } else if (browserInfo.includes('Firefox')) {
        browser = 'Firefox'
    } else {
        browser = 'unknown'
    }
    return browser
}