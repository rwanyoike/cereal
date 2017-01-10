import * as types from './mutation-types';

const StreamZip = require('node-stream-zip');
const _ = require('lodash');
const fileType = require('file-type');

export const setOpenFile = ({ commit }, payload) => {
  const zip = new StreamZip({
    file: payload.file,
    storeEntries: true,
  });

  zip.on('error', (err) => {
    throw err;
  });

  zip.on('ready', () => {
    const entries = _
      .chain(zip.entries())
      .omitBy(entry => entry.size === 0)
      .pickBy(entry => (/\.(gif|jpg|jpeg|png)$/i).test(entry.name))
      .map(metadata => ({
        name: metadata.name,
        size: metadata.size,
      }))
      .value();

    commit(types.SET_OPEN_FILE, {
      file: payload.file,
      zip,
      entries,
    });

    const entryData = zip.entryDataSync(entries[0].name);
    const mime = fileType(entryData).mime;
    const base64 = entryData.toString('base64');
    const dataURI = `data:${mime};base64,${base64}`;

    commit(types.SET_NEXT_ITEM, {
      index: 0,
      dataURI,
    });

    // vue.$electron.ipcRenderer.send('do-set-title', args[0]);
  });
};

export const setNextItem = ({ commit, state }, payload) => {
  const zip = state.archive.zip;
  const entries = state.archive.entries;
  const index = state.current.index;

  let nextIndex = 0;

  switch (payload.action) {
    case 'prev':
      nextIndex = index - 1;
      break;
    case 'next':
      nextIndex = index + 1;
      break;
    // case 'jump':
    //   nextIndex = payload.index;
    //   break;
    default:
      return;
  }

  if (!_.inRange(nextIndex, entries.length)) return;

  const entryData = zip.entryDataSync(entries[nextIndex].name);
  const mime = fileType(entryData).mime;
  const base64 = entryData.toString('base64');
  const dataURI = `data:${mime};base64,${base64}`;

  commit(types.SET_NEXT_ITEM, {
    index: nextIndex,
    dataURI,
  });
};
