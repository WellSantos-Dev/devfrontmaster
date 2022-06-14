import Stripe from 'stripe'

export const stripe = new Stripe(
  'sk_test_51KtES5IMTDPlIEvm9XNhmgJPEM9jKEf0xCIr6iMe8fddV86BcxaGZxAYUbVyhDcR05H4Z12IYjiUj7iYohjZumba00MzmUj29D',
  {
    apiVersion: '2020-08-27',
    appInfo: {
      name: 'devfront',
      version: '0.1.0'
    }
  }
)