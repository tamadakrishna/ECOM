const nextConfig = {
   
    env:{
        // API_URL: "http://localhost:3000",
         API_URL: "https://proecommerce.vercel.app",

        // DB_URI:"mongodb+srv://admin:admin@cluster0.uskgjtq.mongodb.net/?retryWrites=true&w=majority",
        NEXTAUTH_SECRET: "865f38a9950699794e81fcd91584f8612f5a42aec5b7bbed48c1683832c519c22c836c91fe1afc0330a2ea02dea0a31a1f509dfde1a780ce82ec0eb1",

        STRIPE_PUBLIC_KEY: "pk_test_51ONubaSHZfLMCurbIEJZC9AiaonKjBRzwssg5DcmcG6rnwQgr6SG4XBFC9dfNELAlNANLZ76aTto0NAfyv74DjmU007uLUFkF7",
        STRIPE_PRIVATE_KEY: "sk_test_51ONubaSHZfLMCurb8depsFhnl1MMZxYeKLmosyyZgumfrfKzU5fW7pUUkxUH3w7jV3pyxiNiSml2mgqhBrjyVZQF00tcu0KMwO",

        // STRIPE_WEBHOOK_SECRET: "whsec_c7948d152d7f805b161e7d9b4617434241d8fba5f232a2be6ae11f79e919d946",

        CLOUD_NAME: "dewzsspgu",
        CLOUDINARY_API_KEY: "611878661422294",
        CLOUDINARY_API_SECRET: "emnAK4KUuAdfimtHrQSZHMdTqag",
    },
    images: {
        domains: ["res.cloudinary.com"],
      },
}

module.exports = nextConfig
