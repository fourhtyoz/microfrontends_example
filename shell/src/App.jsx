import { Suspense, lazy } from 'react';
import ErrorBoundary from './ErrorBoundary';

const ProductList = lazy(() => import('ProductList/ProductList'));
const ShoppingCart = lazy(() => import('ShoppingCart/ShoppingCart'));

export default function App() {
    return (
        <div>
            <h1>Shell</h1>
            <div style={{ display: 'flex' }}>
                <div style={{ flex: 1 }}>
                    <ErrorBoundary fallback={<p>Something went wrong</p>}>
                        <Suspense fallback={<div>Loading Products...</div>}>
                            <ProductList />
                        </Suspense>
                    </ErrorBoundary>
                </div>
                <div style={{ flex: 1 }}>
                    <ErrorBoundary fallback={<p>Something went wrong</p>}>
                        <Suspense fallback={<div>Loading Cart...</div>}>
                            <ShoppingCart />
                        </Suspense>
                    </ErrorBoundary>
                </div>
            </div>
        </div>
    );
}
