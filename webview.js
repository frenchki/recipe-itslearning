// ItsLearning integration
module.exports = (Franz) => {
    function getMessages() {
        let directMessages = 0;
        let indirectMessages = 0;
        const ItsLearningNotifications = document.querySelector('span#notifications-badge');
        const ItsLearningMessages = document.querySelector('span.l-mail-badge.l-personal-menu-instantmessage-count');
        if (ItsLearningMessages || ItsLearningNotifications) {
            if (!ItsLearningNotifications.classList.contains('h-displaynone')) {
                indirectMessages = ItsLearningNotifications.innerText;
            }
            if (!ItsLearningMessages.classList.contains('h-displaynone')) {
                directMessages = ItsLearningMessages.innerText;
            }
        }
        Franz.setBadge(directMessages, indirectMessages);
    }
    Franz.loop(getMessages);
}