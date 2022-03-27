import MockAdapter from 'axios-mock-adapter';
import apiMethod from "../Utils/apiMethod"
const mock = new MockAdapter(apiMethod) // This sets the mock adapter on the default instance

export default mock
