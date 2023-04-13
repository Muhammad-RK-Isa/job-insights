export const navLinks = [
    {
        id: "/",
        title: "Home"
    },
    {
        id: "statistics",
        title: "Statistics"
    },
    {
        id: "applied_jobs",
        title: "Applied Jobs"
    },
    {
        id: "blog",
        title: "Blog"
    }
];

export const scrollToTop = () => {
    window.scrollTo( 0, 0 );
};

const addToLS = id => {
    let appliedJobs = [];

    const storedAppliedJobs = localStorage.getItem( 'applied-jobs' );
    if ( storedAppliedJobs ) {
        const parsedStoredAppliedJobs = JSON.parse( storedAppliedJobs );
        if ( !parsedStoredAppliedJobs.includes( id ) ) {
            appliedJobs = [ id, ...parsedStoredAppliedJobs];
        }
        else {
            appliedJobs = parsedStoredAppliedJobs;
        };
    }
    else {
        if (!appliedJobs.includes(id)) {
            appliedJobs.push( id );
        };
    }

    localStorage.setItem( 'applied-jobs', JSON.stringify( appliedJobs ) );
};

const getStoredAppliedJobs = () => {
    let appliedJobs = [];

    const storedAppliedJobs = localStorage.getItem( 'applied-jobs' );
    if ( storedAppliedJobs ) {
        appliedJobs = JSON.parse( storedAppliedJobs );
    };
    return appliedJobs;
};

const isExisting = id => {
    const storedAppliedJobs = localStorage.getItem( 'applied-jobs' );
    if ( storedAppliedJobs ) {
        const parsedStoredAppliedJobs = JSON.parse( storedAppliedJobs );
        if ( parsedStoredAppliedJobs.includes( id ) ) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
};

const removeFromLS = id => {
    const storedAppliedJobs = localStorage.getItem( 'applied-jobs' );
    if ( storedAppliedJobs ) {
        const appliedJobs = JSON.parse( storedAppliedJobs );
        const matchExactJob = appliedJobs.find( job => job === id );
        if ( matchExactJob ) {
            const newAppliedJobs = appliedJobs.filter( job => job !== matchExactJob );
            localStorage.setItem( 'applied-jobs', JSON.stringify( newAppliedJobs ) );
        };
    };
};

const deleteSavedAppliedJobs = () => {
    localStorage.removeItem( 'applied-jobs' );
};

export { addToLS, getStoredAppliedJobs, removeFromLS, deleteSavedAppliedJobs, isExisting };