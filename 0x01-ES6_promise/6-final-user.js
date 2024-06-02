import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default async function handleProfileSignup(firstName, lastName, fileName) {
    return  Promise
      .allSettled ( [await signUpUser(firstName, lastName),await uploadPhoto(fileName)])
      .then((res) => (
        res.map((o) => ({
          status: o.status,
          value: o.status === 'fulfilled' ? o.value : String(o.reason),
        }))
      ));
  }