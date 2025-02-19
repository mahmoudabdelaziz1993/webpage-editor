'use client'; // Mark this as a Client Component

// import { useTranslations } from 'next-intl';

export default function CartButton() {
    // const t = useTranslations('CartButton');
    return (
        <button className='flex items-center justify-center p-2 rounded-full hover:bg-slate-100 '>
            <div className="size-6 relative">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M8.25 7.013V6a3.75 3.75 0 1 1 7.5 0v1.013c1.297.037 2.087.17 2.692.667c.83.68 1.06 1.834 1.523 4.143l.6 3c.664 3.32.996 4.98.096 6.079S18.067 22 14.68 22H9.32c-3.386 0-5.08 0-5.98-1.098s-.568-2.758.096-6.079l.6-3c.462-2.309.693-3.463 1.522-4.143c.606-.496 1.396-.63 2.693-.667M9.75 6a2.25 2.25 0 0 1 4.5 0v1h-4.5zM12 17.25a2.25 2.25 0 0 1-2.122-1.5a.75.75 0 1 0-1.414.5a3.751 3.751 0 0 0 7.073 0a.75.75 0 0 0-1.415-.5A2.25 2.25 0 0 1 12 17.25" clipRule="evenodd"></path></svg>
                {/* cart count badge */}
                <span className="absolute -top-2 -right-2 inline-flex items-center justify-center min-w-4 h-4 p-1 text-xs font-bold text-white bg-red-500 rounded-full">
                    30
                </span>
            </div>
            {/* <span className='ml-2'>{t('title')}</span> */}
        </button>
    )
};