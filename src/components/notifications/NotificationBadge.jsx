function NotificationBadge({ count }) {

    if (count === 0) return null;

    return (
        <span
            className="
                absolute
                -top-2
                -right-2
                min-w-[22px]
                h-[22px]
                rounded-full
                bg-red-500
                text-white
                text-xs
                font-bold
                flex
                items-center
                justify-center
                shadow
            "
        >
            {count > 99 ? "99+" : count}
        </span>
    );

}

export default NotificationBadge;