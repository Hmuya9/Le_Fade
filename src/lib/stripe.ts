import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-08-27.basil',
})

export const formatAmountForDisplay = (amount: number, currency: string): string => {
  let numberFormat = new Intl.NumberFormat(['en-US'], {
    style: 'currency',
    currency: currency,
    currencyDisplay: 'symbol',
  })
  return numberFormat.format(amount)
}

export const formatAmountForStripe = (amount: number): number => {
  return Math.round(amount * 100)
}
