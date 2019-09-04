import { useState, useEffect } from 'reac';
import { firebase  } from "../firebase";

const collatedTasks = () => {};

export const useTasks = selectedProject => {
    const [tasks, setTasks] = useState([]);
    
    useEffect(() => {
        let unsubscribe = firebase
            .firestore()
            .collection('tasks')
            .where('userId', '==', '1');

        unsubscribe = selectedProject && !collatedTasksExists(selectedProject)
        ? (unsubscribe = unsubscribe.where('projectId', '==', selectedProject))
            : selectedProject == 'TODAY'
        ? (unsubscribe = unsubscribe.where(
            'date',
            '==',
            moment.toDate()))
        : selectedProject === 'INBOX' || selectedProject === 0
        ? (unsubscribe = unsubscribe.where('date', '==', ''))
        : unsubscribe;
    
    }, [selectedProject]);  
};
