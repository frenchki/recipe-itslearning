// ItsLearning integration
module.exports = (Franz) => {
    function getMessages() {
        let directMessages = 0;
        let indirectMessages = 0;
        const ItsLearningNotifications = document.querySelector('span#notifications-badge');
        const ItsLearningMessages = document.querySelector('span.l-mail-badge.l-personal-menu-instantmessage-count');
        if (ItsLearningMessages || ItsLearningNotifications) {
            directMessages = ItsLearningMessages.innerText;
            indirectMessages = ItsLearningNotifications.innerText;
        }
        Franz.setBadge(directMessages, indirectMessages);
    }
    Franz.loop(getMessages);
}