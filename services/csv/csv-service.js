const delay = require('delay');
const { insertDocument } = require('../../integrations/db');
const { csvStringToArray, verifyDocumentData } = require('../../utils/utils');

exports.upload = async (document) => {
  try {
    const documentArray = csvStringToArray(document);

    let result = null;

    if (!documentArray.length) {
      return {
        success: true,
        data: result,
        message: 'The document does not have the right columns',
      };
    }
    insertDocument(documentArray, (data) => (result = data));
    await delay(1000);

    if (result) {
      return {
        success: true,
        data: result,
        message: 'The document was inserted succesfully',
      };
    } else {
      return {
        success: false,
        data: result,
        message: 'The document was not inserted',
      };
    }
  } catch (error) {
    return {
      success: false,
      message: 'A error occurred',
    };
  }
};
