export const options = {
  preProcess: val => val.replace(/[$,]/g, ''),
  postProcess: val => {
    if (!val) return ''

    return Intl.NumberFormat('en-US', {
      style: 'decimal',
    }).format(val)
  }
}