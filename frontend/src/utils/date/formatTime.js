import { formatDistanceToNow } from 'date-fns'
import { ru } from 'date-fns/locale';

export const formatTime = (date) => {
    const timeAgo = formatDistanceToNow(new Date(date), {
        addSuffix: false,
        locale: ru,
    })

    const match = timeAgo.match(/(\d+)\s*(минута|минуты|час|часа|день|дня|неделя|недели|недель)/);
    if (match) {
        const units = {
            'минута': 'мин.',
            'минуты': 'мин.',
            'час': 'ч.',
            'часа': 'ч.',
            'день': 'дн.',
            'дня': 'дн.',
            'неделя': 'нед.',
            'недели': 'нед.',
            'недель': 'нед.',
        };

        return `${match[1]} ${units[match[2]] || match[2]}`;
    }

    return timeAgo
}