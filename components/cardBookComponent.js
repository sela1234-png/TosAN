


export const cardBookComponent = (book) => {
    return `<div class="group cursor-pointer">
                            <div class="aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105">
                                <img src=${book.image}
                                     alt="Silver Blood" class="w-full h-full object-cover">
                            </div>
                            <p class="mt-3 text-center text-sm font-medium text-gray-800">${book.subtitle}</p>
                        </div>
    `
}