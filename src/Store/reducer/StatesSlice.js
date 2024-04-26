import { createSlice } from '@reduxjs/toolkit'
import Review from '../../Components/UI/Review'

const initialState = {
    review: [
        {
            photo:
                "https://dominilash.ru/upload/resize_cache/iblock/1bc/e7hnkvrpsew9v4l14di4zl8rywrrgje1/70_10000_0/islands_150-_1_.webp",
            name: " Юлия",
            surname: "Доровских",
            reviewText:
                "Заказываю доставку через почту, всегда все быстро! Спасибо. За Клей Х отдельное спасибо, сейчас работаем только на нем, отлично справляется и с классикой, и с обьемами.",
            workPhoto:
                "https://dominilash.ru/upload/medialibrary/9e4/3gn1q3b5ccxrka0k1sxwqtmhr2akmwe3/4.JPG",
        },
        {
            photo:
                "https://dominilash.ru/upload/resize_cache/iblock/1bc/e7hnkvrpsew9v4l14di4zl8rywrrgje1/70_10000_0/islands_150-_1_.webp",
            name: "Мария",
            surname: "Потапчик",
            reviewText:
                "Самый лучший магазин. Вежливые менеджеры, продукция топ! Всегда все во время отправят, упаковка всегда целая. Клея свежие. Я уже второй год на этой продукции.",
            workPhoto:
                "https://dominilash.ru/upload/medialibrary/bbe/azabduldluvn9u2mhwan38ilj1j08d24/3.jpg",
        },
        {
            photo:
                "https://dominilash.ru/upload/resize_cache/iblock/1bc/e7hnkvrpsew9v4l14di4zl8rywrrgje1/70_10000_0/islands_150-_1_.webp",
            name: "Мария",
            surname: "Привалова",
            reviewText:
                "Я очень довольна качеством материалов. Ранее заказывала реснички и клей, они пушка",
            workPhoto:
                "https://dominilash.ru/upload/medialibrary/f78/e1jspl9vaiwn3yh06k72ecjb88jud0w8/2.jpg",
        },
        {
            photo:
                "https://dominilash.ru/upload/resize_cache/iblock/1bc/e7hnkvrpsew9v4l14di4zl8rywrrgje1/70_10000_0/islands_150-_1_.webp",
            name: "Анна",
            surname: "Шитикова",
            reviewText:
                "Любимый магазин с материалами, у которых вообще нет брака. И расположение магазина очень радует. Рядом метро Царицыно ",
            workPhoto:
                "https://dominilash.ru/upload/medialibrary/4d8/qpqdan5yoepxscigmt34jl91ztpxpkxh/1.jpg",
        },
      ],
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer