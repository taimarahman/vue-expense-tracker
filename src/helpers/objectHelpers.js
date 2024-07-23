export function setProperties(keyList, source, destination) {
  keyList.forEach((key) => {
    destination[key] = source[key]
  })
}

export function hexToRgb(hex) {
  hex = hex.replace('#', '')
  const bigint = parseInt(hex, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255
  return `${r}, ${g}, ${b}`
}

export function setCompanyProperties(companyInfo) {
  const colors = companyInfo.company
  setColors(colors)
}



export function setColors(colors) {
  document.documentElement.style.setProperty('--backgroundColorDark', colors.backgroundColorDark)
  document.documentElement.style.setProperty('--backgroundColorLight', colors.backgroundColorLight)
  document.documentElement.style.setProperty('--accentColorDark', colors.accentColorDark)
  document.documentElement.style.setProperty(
    '--accentVariantDark',
    generateLighterColorCode(colors.accentColorDark)
  )
  document.documentElement.style.setProperty('--accentColorLight', colors.accentColorLight)
  document.documentElement.style.setProperty(
    '--accentVariantLight',
    generateLighterColorCode(colors.accentColorLight)
  )
  document.documentElement.style.setProperty('--accentFontColorLight', colors.accentFontColorLight)
  document.documentElement.style.setProperty('--accentFontColorDark', colors.accentFontColorDark)
  document.documentElement.style.setProperty(
    '--backgroundLogoColorLight',
    colors.backgroundLogoColorLight
  )
  document.documentElement.style.setProperty(
    '--backgroundLogoColorDark',
    colors.backgroundLogoColorDark
  )
}

export function getCompanyLogo(companyInfo) {
  if (companyInfo.logo) {
    const fileExtension = companyInfo.company.logoPath.split('.').pop()
    return 'data:image/' + fileExtension + '+xml;base64,' + companyInfo.logo
  }
}

export function convertSecondToMinuteSecond(sec, unitsFull=false) {
  console.log("total time - ", sec)
  const hours = Math.floor(sec / 3600)
  const minutes = Math.floor((sec - hours*3600) / 60)
  const seconds = sec % 60
  var unitHours = hours > 1 ? "hrs" : "hr"
  var unitMinutes = minutes > 1 ? "mins" : "min"
  var unitSeconds = "s"

  console.log(hours, minutes, seconds)

  if(hours === 0 && minutes === 0 && seconds === 0) return `${minutes} ${unitMinutes}`
  if (hours > 0) return `${hours} ${unitHours} ${minutes} ${unitMinutes}`
  else return `${minutes} ${unitMinutes}`
  // if (unitsFull) {
  // }
  // if(hours === 0 && minutes === 0 && seconds === 0) return `${minutes}m`
  // if (hours > 0) return `${hours}h ${minutes}m`
  // else return `${minutes}m`
}

export function handleNegativeInput(event, reactiveValue) {
  const input = event.target
  if (input.value < 0) {
    input.value = 0
    reactiveValue.value = 0
    throw new Error('Value cannot be less than zero.')
  }
}


function generateLighterColorCode(hexString) {
  // Remove '#' or '0x' prefix if present
  hexString = hexString.replace(/^#|^0x/, '');
  
  // Ensure the hex string is 6 characters long
  if (hexString.length !== 6) {
    throw new Error('Invalid hex color code');
  }
  
  // Split the hex string into R, G, B components
  const r = parseInt(hexString.slice(0, 2), 16);
  const g = parseInt(hexString.slice(2, 4), 16);
  const b = parseInt(hexString.slice(4, 6), 16);
  
  // Increase each component by 20, capping at 255
  const newR = Math.min(r + 90, 255);
  const newG = Math.min(g + 90, 255);
  const newB = Math.min(b + 90, 255);
  
  // Convert back to hex and ensure 2-digit representation
  const newColorCode = [newR, newG, newB]
    .map(x => x.toString(16).padStart(2, '0'))
    .join('')
    .toUpperCase();
  
  return `#${newColorCode}`;
}