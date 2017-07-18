import colors from './colors'

const screenXsMin = 480 // Extra small screen / phone
const screenSmMin = 768 // Small screen / tablet
const screenMdMin = 992 // Medium screen / desktop
const screenLgMin = 1200 // Large screen / wide desktop
const screenLgMed = 1260 // Large scree / wider desktop

// So media queries don't overlap when required, provide a maximum
const screenXsMax = screenSmMin - 1
const screenSmMax = screenMdMin - 1
const screenMdMax = screenLgMin - 1

export default {
  ...colors,
  screenXsMin,
  screenSmMin,
  screenMdMin,
  screenLgMin,
  screenLgMed,
  screenXsMax,
  screenSmMax,
  screenMdMax,
}
