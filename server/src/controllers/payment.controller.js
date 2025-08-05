


const paymentCheckout=async (req,res,next) => {
    try {
        
    } catch (error) {
    console.log(error)
    next(error)        
    }
}

const paymentWebhook=async (req,res,next) => {
    try {
        
    } catch (error) {
        console.log(error)
        next(error)
    }
}

const paymentVerify=async (req,res,next) => {
    try {
        
    } catch (error) {
        console.log(error)
        next(error)       
    }
}

export {paymentCheckout,paymentWebhook,paymentVerify}