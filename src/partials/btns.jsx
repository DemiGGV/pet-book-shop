export const paggination = (current, array, count) => {

    let lastPageNmbr = Math.ceil( array.length / count )
    let startIndx, lastIndx, currentPage

    const startPage = () => {
        if ( +currentPage === +startPage ) return
        currentPage = 1;
        startIndx = 0;
        lastIndx = currentPage * count;
    }

    const previousPage = () => {
        if ( +currentPage === +startPage ) return
        startIndx = ( currentPage - 1 ) * count;
        lastIndx = currentPage * count;
        currentPage = --currentPage
    }

    const nextPage = () => {
        if (+currentPage===+lastPage) return
        startIndx = currentPage * count;
        lastIndx = ( currentPage + 1 ) * count;
        currentPage = ++currentPage
    }
    
    const lastPage = () => {
        if (+currentPage===+lastPage) return
        currentPage = lastPageNmbr;
        startIndx = ( lastPageNmbr - 1 ) * count;
        lastIndx = numbers;
    }

return `<ul class="btns__list">
    <li class="btns__items">
        <button type="button" class="btns__btn js-pagination-btn-left">
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.59986 7.71004C2.50613 7.61707 2.43174 7.50647 2.38097 7.38461C2.3302 7.26275 2.30406 7.13205 2.30406 7.00003C2.30406 6.86802 2.3302 6.73732 2.38097 6.61546C2.43174 6.4936 2.50613 6.383 2.59986 6.29003L7.18986 1.71003C7.28359 1.61706 7.35798 1.50646 7.40875 1.3846C7.45952 1.26274 7.48566 1.13204 7.48566 1.00002C7.48566 0.868012 7.45952 0.737306 7.40875 0.615446C7.35798 0.493587 7.28359 0.382986 7.18986 0.290022C7.0025 0.103771 6.74905 -0.000770569 6.48486 -0.000770569C6.22067 -0.000770569 5.96722 0.103771 5.77986 0.290022L1.18986 4.88003C0.628058 5.44253 0.3125 6.20503 0.3125 7.00003C0.3125 7.79504 0.628058 8.55754 1.18986 9.12004L5.77986 13.71C5.96612 13.8948 6.21752 13.9989 6.47986 14C6.61147 14.0008 6.74193 13.9756 6.86377 13.9258C6.9856 13.8761 7.09642 13.8027 7.18986 13.71C7.28359 13.6171 7.35798 13.5065 7.40875 13.3846C7.45952 13.2628 7.48566 13.1321 7.48566 13C7.48566 12.868 7.45952 12.7373 7.40875 12.6155C7.35798 12.4936 7.28359 12.383 7.18986 12.29L2.59986 7.71004Z" fill="currentColor" />
            </svg>
        </button>
    </li>
    <li class="btns__items">
            <button type="button" class="btns__btn js-pagination-btn-">${currentPage} out of ${lastPageNmbr}</button>
    </li>
    <li class="btns__items">
        <button type="button" class="btns__btn js-pagination-btn-right">
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.40014 7.71005C5.49387 7.61709 5.56826 7.50649 5.61903 7.38463C5.6698 7.26277 5.69594 7.13207 5.69594 7.00005C5.69594 6.86804 5.6698 6.73734 5.61903 6.61548C5.56826 6.49362 5.49387 6.38302 5.40014 6.29005L0.81014 1.71005C0.716411 1.61708 0.642016 1.50648 0.591248 1.38462C0.540479 1.26276 0.514341 1.13206 0.514341 1.00005C0.514341 0.868034 0.540479 0.737328 0.591248 0.615469C0.642016 0.493609 0.716411 0.383008 0.81014 0.290045C0.997502 0.103794 1.25095 -0.000747681 1.51514 -0.000747681C1.77933 -0.000747681 2.03278 0.103794 2.22014 0.290045L6.81014 4.88005C7.37194 5.44255 7.6875 6.20505 7.6875 7.00005C7.6875 7.79506 7.37194 8.55755 6.81014 9.12006L2.22014 13.7101C2.03388 13.8948 1.78248 13.999 1.52014 14.0001C1.38853 14.0008 1.25807 13.9756 1.13623 13.9258C1.0144 13.8761 0.90358 13.8027 0.81014 13.7101C0.716411 13.6171 0.642016 13.5065 0.591248 13.3846C0.540479 13.2628 0.514341 13.1321 0.514341 13.0001C0.514341 12.868 0.540479 12.7373 0.591248 12.6155C0.642016 12.4936 0.716411 12.383 0.81014 12.2901L5.40014 7.71005Z" fill="currentColor" />
            </svg>
        </button>
    </li>
</ul>`}