import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
  // as per spec, cart needs to persist between page refreshes, so it is whitelisted here.
  whitelist: ['cart', 'ux'],
}

export default persistConfig;
