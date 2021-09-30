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
        //  ...user.changePassword,
            ...user.deleteUser
        },
        '/bookings':{
          ...booking.getBookings,
          ...booking.createBooking
        },
        /*'/booking/{_id}':{
          ...booking.getBooking,
          ...booking.updateBooking,
          ...booking.deleteBooking
        },*/
        '/offers':{
          ...offer.getOffers,
         // ...booking.createOffer
        },
        '/offers/offers?title=_':{
          ...offer.getOffer,
         // ...offer.updateOffer,
         // ...offer.deleteOffer
        },
        '/messages':{
            ...message.getMessages,
            ...message.createMessage
        },
       /* '/messages/{_id}':{
            ...message.getMessage,
            ...message.updatemessage,
            ...message.deletemessage
        },*/
       /* 'message/{_id}/reference': {
            ...messageReferences.createReference,
            ...messageReferences.deleteReference
        },*/
        '/comments':{
            ...comment.getComments,
            ...comment.createComment
        },
        /*'/comments/{_id}':{
            ...comment.getComment,
            ...comment.updateComment,
            ...comment.deleteComment
        },*/
        '/signin':{
            ...authentification.login
        },
        '/signup':{
            ...authentification.register
        },
        /*'/recovery':{
            ...authentification.lostPassword
        },*/
        '/admin':{
          ...admin.getAdmin,
          ...admin.updateAdmin,
          ...admin.changeAdmin,
          ...admin.deleteAdmin 
        },
        '/admin/user':{
          ...admin.getUsers
        },
        '/admin/user?id=_':{
          ...admin.deleteUser
        },
        '/admin/offers':{
          ...admin.createOffer,
          ...admin.updateOffer
        },
        '/admin/messages':{
          ...admin.getMessages,
          
          ...admin.deleteMessages
        },
        '/admin/messages?id=_':{
          ...admin.updateMessages
        },
        '/admin/comments?id=_':{
          ...admin.deleteComment
        },
        '/admin/comments':{
          ...admin.getComments
        },
        '/admin/booking?id=_':{
          ...admin.deleteBooking
        },
        '/admin/bookings':{
          ...admin.updateBooking,
          ...admin.getBookings
        }
        
  }
}
