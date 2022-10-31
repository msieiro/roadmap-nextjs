export type CareerYearsToItem = {
  month?: string
  year?: string
}

export type CareerYearsFromItem = {
  month: string
  year: string
}

export type CareerYearsItem = {
  from: CareerYearsFromItem
  to: CareerYearsToItem
}

export type CareerItem = {
  qualification: string
  company: string
  level: string
  years: CareerYearsItem
  technologies: string[]
  skills: string[]
  good_learning: boolean
  type: string
}

export type CareerResponse = {
  data: CareerItem[]
}
