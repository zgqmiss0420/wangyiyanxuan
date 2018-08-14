/*
与后台交互模块
 */
import ajax from './ajax'

/**
 * 获取data
 */
export const reqData = () => ajax('/data')

export const reqCarouse = () => ajax('/banner')

export const reqHome = () => ajax('/home')

export const reqDetail = () => ajax('/detail')

export const reqNav = () => ajax('/nav')
