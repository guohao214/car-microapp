export function showLoading() {
  wx.showLoading({
    title: '请求中...',
  })
}

export function hideLoading() {
  wx.hideLoading()
}
