
const appTypes = {
    simpsonsviewer: {
        id: 0,
        name: 'Simpsonsviewer',
        package: 'com.sample.simpsonsviewer'
    },
    wireviewer: {
        id: 1,
        name: 'Wireviewer',
        package: 'com.sample.wireviewer'
    }
};

const initialAppState = {
    appId: appTypes.simpsonsviewer.id,
    appId: appTypes.wireviewer.id
};

export {
    appTypes,
    initialAppState
};
