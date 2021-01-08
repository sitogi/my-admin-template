import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import { CallableContext, HttpsError } from 'firebase-functions/lib/providers/https';

admin.initializeApp();

const checkAuthorization = (context: CallableContext) => {
  if (!context || !context.auth) {
    functions.logger.error('context or context.auth is undefined.');
    throw new HttpsError('unauthenticated', 'unauthenticated.');
  }
};

exports.listAuthenticationUsers = functions.region('asia-northeast1').https.onCall(async (data, context) => {
  checkAuthorization(context);

  const listUsersResult = await admin.auth().listUsers();
  const users = listUsersResult.users.map((u) => u.toJSON());

  return { users };
});
