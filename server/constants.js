exports.NOTIFICATION_TYPES = {
  ANDROID_PUSH: 1,
};

exports.JOB_TYPES = {
  ANDROID_PUSH: 1,
};
exports.CONSUMER_TYPES = {
	ANDROID_PUSH: "send-android-push-notification"
}
exports.JOB_CONSUMER_FUNCTION = {
	ANDROID_PUSH : "ConsumeAndroidPushNotificationJob"
}

exports.JOB_STATUS = {
	RECIEVED  : 1,
	ENQUEUED  : 2,
	ACTIVE    : 3,
	INACTIVE  : 4,
	COMPLETE  : 5,
	DELAYED   : 6,
	FAILED    : 7,
	REMOVED   : 8,
}

// Mongo operation queue type
exports.OP_QUEUE_TYPE = {
  UPSERT: 1,
  INSERT: 2,
};

exports.PUSH_NOTIFICATION_SEND_TYPES = {
  TEST_SEND       : 1,
  SEND_TO_ALL     : 2,
  SEND_TO_SEGMENT : 3,
  SEND_TO_LIST    : 4,
  SEND_VIA_MONGO  : 5,
  SEND_API        : 6,
};