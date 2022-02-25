import { db } from './firebase.js'
import { collection, onSnapshot } from 'firebase/firestore'
const catalogRef = collection(db, 'catalog')

getCatalogItems(catalogRef)

function getCatalogItems(ref) {
	onSnapshot(ref, snapshot => {
		const items = []
		snapshot.docs.forEach(doc => {
			items.push({ ...doc.data(), id: doc.id })
		})
		createCatalogItems(items)

		document.getElementById('rating-filter').addEventListener('click', () => {
			if (document.getElementById('rating-filter').checked) {
				filterHandler('RATING', items)
			} else createCatalogItems(items)
		})

		document
			.getElementById('order-filter-instock')
			.addEventListener('click', () => {
				if (document.getElementById('order-filter-instock').checked) {
					filterHandler('IN_STOCK', items)
				} else createCatalogItems(items)
			})

		document
			.getElementById('order-filter-onorder')
			.addEventListener('click', () => {
				if (document.getElementById('order-filter-onorder').checked) {
					filterHandler('ON_ORDER', items)
				} else createCatalogItems(items)
			})

		const brands = document.querySelectorAll('.filter-brand')
		brands.forEach(brand => {
			brand.addEventListener('click', e => {
				if (brand.checked) {
					filterHandler('BRAND', items, e)
				} else createCatalogItems(items)
			})
		})

		const wifiItems = document.querySelectorAll('.filter-wifi')
		wifiItems.forEach(wifi => {
			wifi.addEventListener('click', e => {
				if (wifi.checked) {
					filterHandler('WIFI', items, e)
				} else createCatalogItems(items)
			})
		})
	})
}

function createCatalogItems(items) {
	document.querySelector('.products-result-items ').innerHTML = ''

	items.forEach(item => {
		const { title, img, price, creditPrice, inStock, rating, delivery } = item
		const doc = document.createElement('div')
		doc.getAttribute('class')
		doc.classList.add(
			'products-result-item',
			'p-3',
			'flex',
			'self-stretch',
			'bg-white',
			'mt-2'
		)
		doc.innerHTML += `
		<img
		class='h-32 w-32 mr-4 object-cover'
		src=${img}
		alt=''
	/>
	<div class='products-item-desc flex flex-wrap'>
		<h4 class='text-sm inline-block'>
			${title}
		</h4>
		<div class='products-item-bottom flex flex-wrap self-end'>
			<div class='rating-wrapper flex items-center w-40'>
				<div class='rating flex items-center border rounded-xl px-2'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						class='h-3 w-3 text-orange-400'
						viewBox='0 0 20 20'
						fill='currentColor'
					>
						<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
					</svg>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						class='h-3 w-3 text-orange-400'
						viewBox='0 0 20 20'
						fill='currentColor'
					>
						<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
					</svg>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						class='h-3 w-3 text-orange-400'
						viewBox='0 0 20 20'
						fill='currentColor'
					>
						<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
					</svg>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						class='h-3 w-3 text-orange-400'
						viewBox='0 0 20 20'
						fill='currentColor'
					>
						<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
					</svg>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						class='h-3 w-3 text-orange-400 mr-2'
						viewBox='0 0 20 20'
						fill='currentColor'
					>
						<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
					</svg>
					${rating}
				</div>
			</div>
			<div class='available flex text-sm w-full'>
				<span class='mr-1'>В наличии: </span>
				<a class='mr-2 text-blue-600' href='#'>
					в ${inStock} магазинах
				</a>
				<span class='mr-1'>Доставим на дом:</span>
				<a class='text-blue-600' href='#'>
					${delivery}
				</a>
			</div>
		</div>
	</div>
	<div class='products-item-price'>
		<div class="flex flex-wrap justify-end mb-4">
			<strong class='inline-block text-xl'>${price} ₽</strong>
			<span class='text-sm'>от ${creditPrice} ₽/ мес</span>
		</div>
		<div class='products-item-price-btns flex'>
			<button class='btn-favorite mr-2 border p-1 rounded-lg hover:border-orange-400 hover:bg-orange-400 hover:text-white text-gray-400 h-8'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					class='h-5 w-5'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
				>
					<path
						stroke-linecap='round'
						stroke-linejoin='round'
						stroke-width='2'
						d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
					/>
				</svg>
			</button>
			<button class='border py-1 px-4 rounded-lg hover:border-orange-400 hover:bg-orange-400 hover:text-white h-8'>
				Купить
			</button>
		</div>
	</div>
	`
		document.querySelector('.products-result-items').appendChild(doc)
	})
}

function filterHandler(filterType, items, e) {
	const filtredItems = []

	switch (filterType) {
		case 'RATING':
			items.forEach(item => {
				if (item.rating >= 4) {
					filtredItems.push(item)
				}
			})
			break
		case 'ON_ORDER':
			items.forEach(item => {
				if (item.inStock === 0) {
					filtredItems.push(item)
					console.log(item, item.inStock)
				}
			})
			break
		case 'IN_STOCK':
			items.forEach(item => {
				if (item.inStock !== 0) {
					filtredItems.push(item)
				}
			})
			break
		case 'BRAND':
			const brand = e.originalTarget.attributes[0].value
			items.forEach(item => {
				if (brand === item.brand) {
					filtredItems.push(item)
				}
			})
			break
		case 'WIFI':
			let isWifi = false
			if (e.originalTarget.value === 'true') {
				isWifi = true
			}
			if (e.originalTarget.value === 'false') {
				isWifi = false
			}

			items.forEach(item => {
				if (item.wiFi === isWifi) {
					filtredItems.push(item)
				}
			})
			break
	}
	createCatalogItems(filtredItems)
}

document
	.getElementById('sidebar-spoiler-shops')
	.addEventListener('click', () => {
		document.getElementById('spoiler-show-shops').classList.toggle('hidden')
	})

document
	.getElementById('sidebar-spoiler-price')
	.addEventListener('click', () => {
		document.getElementById('spoiler-show-price').classList.toggle('hidden')
	})

document
	.getElementById('sidebar-spoiler-model')
	.addEventListener('click', () => {
		document.getElementById('spoiler-show-model').classList.toggle('hidden')
	})

document
	.getElementById('sidebar-spoiler-wifi')
	.addEventListener('click', () => {
		document.getElementById('spoiler-show-wifi').classList.toggle('hidden')
	})
