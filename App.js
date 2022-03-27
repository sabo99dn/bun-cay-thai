import React from 'react'

/*Store state Redux Saga */
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import storeInit from './src/Store'
const { store, persistor } = storeInit()

/*Bootstrap setup */
import Bootstrap from './src/bootstrap'
import './src/MockData'

export default () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Bootstrap />
            </PersistGate>
        </Provider>
    )
}
