import firebase from 'firebase';

export function getInitials(name: string) {
  const splitedName = name.toUpperCase().split(' ');
  if (splitedName.length > 1) {
    return splitedName[0][0] + splitedName[1][0];
  }
  return splitedName.slice(0, 2);
}

export function transformToArray(snapValue: any) {
  return snapValue
    ? Object.keys(snapValue).map(id => {
        return {
          ...snapValue[id],
          id,
        };
      })
    : [];
}

export const getUserUpdates = async (
  userId: string,
  keyToUpdate: string,
  value: any,
  db: firebase.database.Database
) => {
  const updates: any = {};

  // Update profile
  updates[`/profiles/${userId}/${keyToUpdate}`] = value;

  // Get messages
  const getMsgs = db
    .ref('/messages')
    .orderByChild('author/uid')
    .equalTo(userId)
    .once('value');

  // Get Rooms
  const getRooms = db
    .ref('/rooms')
    .orderByChild('lastMessage/author/uid')
    .equalTo(userId)
    .once('value');

  // Get snapShot
  const [mSnap, rSnap] = await Promise.all([getMsgs, getRooms]);

  mSnap.forEach(msgSnap => {
    updates[`/messages/${msgSnap.key}/author/${keyToUpdate}`] = value;
  });

  rSnap.forEach(roomSnap => {
    updates[`/rooms/${roomSnap.key}/lastMessage/author/${keyToUpdate}`] = value;
  });

  return updates;
};
