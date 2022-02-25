import { db } from './firebase.js'
import {
	doc,
	collection,
	addDoc,
	onSnapshot,
	deleteDoc,
} from 'firebase/firestore'
const itemsRef = collection(db, 'items')
const cartRef = collection(db, 'cart')

getData(itemsRef)
getData(cartRef)

//* GET ALL DATA ==============================================
function getData(ref) {
	onSnapshot(ref, snapshot => {
		const items = []

		snapshot.docs.forEach(doc => {
			items.push({ ...doc.data(), id: doc.id })
		})

		if (snapshot._snapshot.query.path.segments[0] === 'items') {
			createItems(items)
		} else if (snapshot._snapshot.query.path.segments[0] === 'cart') {
			createCartItems(items)
		}
	})
}

//* ITEMS =====================================================
function createItems(items) {
	document.querySelector('.offer-center ').innerHTML = ''
	items.forEach(item => {
		const { title, img, price, rating, id } = item

		const doc = document.createElement('div')
		doc.getAttribute('class')
		doc.classList.add(
			'offer-item',
			'flex',
			'flex-wrap',
			'justify-center',
			'w-1/3',
			'p-5'
		)
		doc.innerHTML += `
									<img
										src="${img}"
										alt=""
									/>
									<h3 class="mb-2">
										${title}
									</h3>
									<div class="rating-wrapper mb-3 flex items-center w-full">
										<div class="border rounded-xl px-2 mr-2">сравнить</div>
										<div
										class="rating flex items-center border rounded-xl px-2 mr-auto "
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-5 w-5 text-orange-400"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
											/>
										</svg>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-5 w-5 text-orange-400 "
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
											/>
										</svg>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-5 w-5 text-orange-400 "
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
											/>
										</svg>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-5 w-5 text-orange-400 "
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
											/>
										</svg>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-5 w-5 text-orange-400  mr-2"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
											/>
										</svg>
											${rating}
									</div>
									</div>
									<div class="price h-8 pl-2 w-2/3 text-black font-bold  mr-auto flex bg-gray-100 items-center  text-lg rounded-xl">
										${price} ₽
									</div>
			`

		// favoriteBtn
		const favoriteBtn = document.createElement('button')
		favoriteBtn.getAttribute('class')
		favoriteBtn.classList.add(
			'btn-favorite',
			'mr-2',
			'border',
			'p-1',
			'rounded-lg',
			'hover:border-orange-400',
			'hover:bg-orange-400',
			'hover:text-white',
			'text-gray-400',
			'h-8'
		)
		favoriteBtn.innerHTML = `
											<svg
												xmlns="http://www.w3.org/2000/svg"
												class="h-5 w-5 "
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
												/>
											</svg>
			`

		// cartBtn
		const cartBtn = document.createElement('button')
		cartBtn.getAttribute('class')
		cartBtn.classList.add(
			'btn-cart',
			'mr-2',
			'border',
			'p-2',
			'rounded-lg',
			'hover:border-orange-400',
			'hover:bg-orange-400',
			'hover:text-white',
			'text-gray-400',
			'h-8'
		)
		cartBtn.setAttribute('id', `${id}`)
		cartBtn.innerHTML = `
													<svg
														xmlns="http://www.w3.org/2000/svg"
														class="h-4 w-4 pointer-events-none "
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
													>
														<path
															stroke-linecap="round"
															stroke-linejoin="round"
															stroke-width="2"
															d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
														/>
													</svg>
					`

		document.querySelector('.offer-center').appendChild(doc)
		doc.appendChild(favoriteBtn)
		doc.appendChild(cartBtn)

		cartBtn.addEventListener('click', addItemToCart)
	})
}

//* CART ======================================================
//* open cart function
document.getElementById('cart-btn').addEventListener('click', openCart)
function openCart() {
	document.getElementById('cart-modal').classList.toggle('active')
}

function createCartItems(items) {
	document.querySelector('.cart-modal-center').innerHTML = ''
	items.forEach(item => {
		const { id, title, img, price } = item
		const doc = document.createElement('div')
		doc.getAttribute('class')
		doc.classList.add('cart-modal-item', 'mb-3', 'items-center', 'flex')
		doc.innerHTML += `
										<img class="mr-4 w-12"
											src="${img}"
											alt=""
										/>
										<h5 class="w-2/3" id="${id}">
											${title}
										</h5>
										<div class="cart-modal-price mr-2 w-28 break-normal">
											${price} ₽
										</div>
										
		`
		document.querySelector('.cart-modal-center').appendChild(doc)

		const cartRemoveBtn = document.createElement('button')
		cartRemoveBtn.getAttribute('class')
		cartRemoveBtn.classList.add('cart-remove-btn')
		cartRemoveBtn.setAttribute('id', `${id}`)
		cartRemoveBtn.innerHTML += `
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-6 w-6 pointer-events-none "
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
											/>
										</svg>
		`
		doc.appendChild(cartRemoveBtn)

		cartRemoveBtn.addEventListener('click', removeItemFromCart)
	})
}
function addItemToCart(item) {
	addDoc(cartRef, {
		title: item.srcElement.parentElement.children[1].innerText,
		img: item.srcElement.parentElement.children[0].src,
		price: item.srcElement.parentElement.children[3].innerText,
	})
}
function removeItemFromCart(item) {
	const id = item.srcElement.id
	const docRef = doc(db, 'cart', id)

	deleteDoc(docRef)
}

//! ХЗ , проблма: после удаления всех доков нельзя добавить новые айтемы в корзину
// document
// 	.querySelector('.cart-modal-clear')
// 	.addEventListener('click', removeAllItemsFromCart)
// function removeAllItemsFromCart() {
// 	const items = []

// 	onSnapshot(cartRef, snapshot => {
// 		snapshot.docs.forEach(docItem => {
// 			const item = { id: docItem.id }

// 			const docRef = doc(db, 'cart', item.id)
// 			deleteDoc(docRef)

// 			console.log(docItem.exists)
// 		})
// 	})
// }
