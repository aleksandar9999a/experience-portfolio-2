import { firebaseApp } from '../firebase';
import uid from 'uid';

/**
 * Get url from snapshot
 * 
 * @param {UploadTaskSnapshot} shot
 * 
 * @returns {Promise} 
 */
function getURL(shot: firebase.storage.UploadTaskSnapshot): Promise<any> {
    return shot.ref.getDownloadURL();
}

/**
 * Upload File
 * 
 * @param {File} file 
 * @param {String} id
 * 
 * @returns {Promise} 
 */
function uploadFile(file: File, id: string) {
    return firebaseApp
        .storage()
        .ref(`images/${id}`)
        .put(file);
}

/**
 * Upload Image
 * 
 * @param {File} file 
 * 
 * @returns {Promise}
 */
export function uploadImage(file: File) {
    const id = uid();
    return uploadFile(file, id)
        .then(getURL)
        .then(url => {
            return { id, url };
        });
}

/**
 * Upload images
 * 
 * @param {File[]} files 
 */
export function uploadImages(files: File[]) {
    return Promise.all(files.map(uploadImage))
}