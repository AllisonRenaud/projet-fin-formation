const user = require("./user")
const comment = require("./comment")
const message = require("./message")
const booking = require("./booking")
const authentification = require("./authentification")
const offer = require("./offer")
const admin = require("./admin")

module.exports = {
    paths:{
        '/user':{
            ...user.getUser,
            ...user.updateUser,
            ...user.changePassword,
            ...user.deleteUser
        },
        '/booking':{
          ...booking.getBookings,
          ...booking.createBooking
        },
        '/booking/{_id}':{
          ...booking.getBooking,
          ...booking.updateBooking,
          ...booking.deleteBooking
        },
        '/offer':{
          ...offer.getOffers,
          ...booking.createOffer
        },
        '/offer/{_id}':{
          ...offer.getOffer,
          ...offer.updateOffer,
          ...offer.deleteOffer
        },
        '/message':{
            ...message.getMessages,
            ...message.createMessage
        },
        '/message/{_id}':{
            ...message.getMessage,
            ...message.updatemessage,
            ...message.deletemessage
        },
       /* 'message/{_id}/reference': {
            ...messageReferences.createReference,
            ...messageReferences.deleteReference
        },*/
        '/comment':{
            ...comment.getComments,
            ...comment.createComment
        },
        '/comment/{_id}':{
            ...comment.getComment,
            ...comment.updateComment,
            ...comment.deleteComment
        },
        '/login':{
            ...authentification.login
        },
        '/register':{
            ...authentification.register
        },
        '/recovery':{
            ...authentification.lostPassword
        },
        '/admin':{
          ...admin.getAdmin,
          ...admin.updateAdmin,
          ...admin.changeAdmin,
          ...admin.deleteAdmin 
        },

    }
}
