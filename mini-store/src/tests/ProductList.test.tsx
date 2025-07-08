// import React from "react";
// import { render, screen, fireEvent } from "@testing-library/react";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import ProductList from "@/components/ProductList";
// import { useProducts } from "@/hooks/useProduct";

// // Mock the hook
// jest.mock("@/hooks/useProduct");

// // Mock the child components
// jest.mock("@/components/ProductCard", () => {
//   return function MockProductCard({ product }: { product: any }) {
//     return (
//       <div data-testid={`product-card-${product.id}`}>
//         <h3>{product.name}</h3>
//         <p>${product.price}</p>
//       </div>
//     );
//   };
// });

// jest.mock("./SupportComponents", () => ({
//   ProductGridSkeleton: () => (
//     <div data-testid="product-skeleton">Loading products...</div>
//   )
// }));

// // Sample test data - Updated to include all required Product properties
// const mockProducts = [
//   {
//     id: "1",
//     name: "Lipstick",
//     price: 25.99,
//     image: "/lipstick.jpg",
//     category: "makeup",
//     slug: "lipstick",
//     description: "High-quality lipstick with long-lasting formula",
//     stock: 50
//   },
//   {
//     id: "2",
//     name: "Foundation",
//     price: 45.99,
//     image: "/foundation.jpg",
//     category: "makeup",
//     slug: "foundation",
//     description: "Full coverage foundation for all skin types",
//     stock: 30
//   }
// ];

// // Helper to wrap component with required providers
// const TestWrapper = ({ children }: { children: React.ReactNode }) => {
//   const queryClient = new QueryClient({
//     defaultOptions: {
//       queries: { retry: false }
//     }
//   });

//   return (
//     <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
//   );
// };

// // Cast the mock to get proper TypeScript support
// const mockUseProducts = useProducts as jest.MockedFunction<typeof useProducts>;

// // Helper function to create a complete mock return value
// const createMockUseProductsReturn = (overrides: any = {}) => ({
//   data: undefined,
//   isLoading: false,
//   isError: false,
//   isPending: false,
//   isSuccess: false,
//   isLoadingError: false,
//   isRefetchError: false,
//   error: null,
//   status: "idle" as const,
//   fetchStatus: "idle" as const,
//   refetch: jest.fn(),
//   remove: jest.fn(),
//   cancel: jest.fn(),
//   invalidate: jest.fn(),
//   isFetching: false,
//   isFetchingNextPage: false,
//   isFetchingPreviousPage: false,
//   isRefetching: false,
//   isStale: false,
//   isPlaceholderData: false,
//   isPaused: false,
//   failureCount: 0,
//   failureReason: null,
//   errorUpdateCount: 0,
//   dataUpdatedAt: 0,
//   errorUpdatedAt: 0,
//   fetchedAt: 0,
//   ...overrides
// });

// describe("ProductList Component", () => {
//   // Reset mocks before each test
//   beforeEach(() => {
//     jest.clearAllMocks();
//   });

//   describe("Loading State", () => {
//     it("shows loading skeleton when products are loading", () => {
//       // Mock the hook to return loading state
//       mockUseProducts.mockReturnValue(
//         createMockUseProductsReturn({
//           isLoading: true,
//           isPending: true,
//           status: "pending"
//         })
//       );

//       render(
//         <TestWrapper>
//           <ProductList />
//         </TestWrapper>
//       );

//       // Check if loading skeleton is displayed
//       expect(screen.getByTestId("product-skeleton")).toBeInTheDocument();
//       expect(screen.getByText("Loading products...")).toBeInTheDocument();
//     });

//     it("shows header skeleton elements when loading", () => {
//       mockUseProducts.mockReturnValue(
//         createMockUseProductsReturn({
//           isLoading: true,
//           isPending: true,
//           status: "pending"
//         })
//       );

//       render(
//         <TestWrapper>
//           <ProductList />
//         </TestWrapper>
//       );

//       // Check if the loading state has the right structure
//       const skeletonElements = screen.getAllByRole("generic"); // divs with animate-pulse class
//       expect(skeletonElements.length).toBeGreaterThan(0);
//     });
//   });

//   describe("Error State", () => {
//     it("shows error message when products fail to load", () => {
//       const errorMessage = "Failed to fetch products";
//       const mockRefetch = jest.fn();

//       mockUseProducts.mockReturnValue(
//         createMockUseProductsReturn({
//           error: new Error(errorMessage),
//           isError: true,
//           status: "error",
//           refetch: mockRefetch
//         })
//       );

//       render(
//         <TestWrapper>
//           <ProductList />
//         </TestWrapper>
//       );

//       // Check if error message is displayed
//       expect(screen.getByText(/Error loading products/)).toBeInTheDocument();
//       expect(screen.getByText(errorMessage)).toBeInTheDocument();
//     });

//     it("calls refetch when retry button is clicked", () => {
//       const mockRefetch = jest.fn();

//       mockUseProducts.mockReturnValue(
//         createMockUseProductsReturn({
//           error: new Error("Network error"),
//           isError: true,
//           status: "error",
//           refetch: mockRefetch
//         })
//       );

//       render(
//         <TestWrapper>
//           <ProductList />
//         </TestWrapper>
//       );

//       // Click the retry button
//       const retryButton = screen.getByRole("button", { name: /retry/i });
//       fireEvent.click(retryButton);

//       // Check if refetch was called
//       expect(mockRefetch).toHaveBeenCalledTimes(1);
//     });
//   });

//   describe("Empty State", () => {
//     it("shows empty message when no products are returned", () => {
//       mockUseProducts.mockReturnValue(
//         createMockUseProductsReturn({
//           data: [],
//           isSuccess: true,
//           status: "success"
//         })
//       );

//       render(
//         <TestWrapper>
//           <ProductList />
//         </TestWrapper>
//       );

//       expect(screen.getByText("No products found.")).toBeInTheDocument();
//     });

//     it("shows empty message when products is undefined", () => {
//       mockUseProducts.mockReturnValue(
//         createMockUseProductsReturn({
//           data: undefined,
//           isSuccess: true,
//           status: "success"
//         })
//       );

//       render(
//         <TestWrapper>
//           <ProductList />
//         </TestWrapper>
//       );

//       expect(screen.getByText("No products found.")).toBeInTheDocument();
//     });
//   });

//   describe("Success State", () => {
//     beforeEach(() => {
//       mockUseProducts.mockReturnValue(
//         createMockUseProductsReturn({
//           data: mockProducts,
//           isSuccess: true,
//           status: "success"
//         })
//       );
//     });

//     it("displays the header section with correct text", () => {
//       render(
//         <TestWrapper>
//           <ProductList />
//         </TestWrapper>
//       );

//       expect(screen.getByText("BEAUTY PRONOUNCED")).toBeInTheDocument();
//       expect(
//         screen.getByText("ADD A FLAVOR TO BEING A GIRL")
//       ).toBeInTheDocument();
//       expect(
//         screen.getByText(/Lorem ipsum dolor sit amet/)
//       ).toBeInTheDocument();
//     });

//     it("renders all products when data is loaded", () => {
//       render(
//         <TestWrapper>
//           <ProductList />
//         </TestWrapper>
//       );

//       // Check if both product cards are rendered
//       expect(screen.getByTestId("product-card-1")).toBeInTheDocument();
//       expect(screen.getByTestId("product-card-2")).toBeInTheDocument();

//       // Check if product names are displayed
//       expect(screen.getByText("Lipstick")).toBeInTheDocument();
//       expect(screen.getByText("Foundation")).toBeInTheDocument();
//     });

//     it("renders products in a grid layout", () => {
//       render(
//         <TestWrapper>
//           <ProductList />
//         </TestWrapper>
//       );

//       // Check if the grid container exists
//       const productGrid = screen.getByLabelText("Product grid");
//       expect(productGrid).toBeInTheDocument();

//       // Check if it has the right CSS classes for grid layout
//       expect(productGrid).toHaveClass(
//         "grid",
//         "grid-cols-1",
//         "sm:grid-cols-2",
//         "lg:grid-cols-3",
//         "xl:grid-cols-4"
//       );
//     });

//     it("renders correct number of products", () => {
//       render(
//         <TestWrapper>
//           <ProductList />
//         </TestWrapper>
//       );

//       // Should render exactly 2 products (based on our mock data)
//       const productCards = screen.getAllByTestId(/product-card-/);
//       expect(productCards).toHaveLength(2);
//     });
//   });

//   describe("Accessibility", () => {
//     it("has proper ARIA labels", () => {
//       mockUseProducts.mockReturnValue(
//         createMockUseProductsReturn({
//           data: mockProducts,
//           isLoading: false,
//           error: null,
//           refetch: jest.fn()
//         })
//       );

//       render(
//         <TestWrapper>
//           <ProductList />
//         </TestWrapper>
//       );

//       // Check for product grid aria-label
//       expect(screen.getByLabelText("Product grid")).toBeInTheDocument();
//     });

//     it("has proper button accessibility in error state", () => {
//       mockUseProducts.mockReturnValue(
//         createMockUseProductsReturn({
//           data: undefined,
//           isLoading: false,
//           error: new Error("Test error"),
//           refetch: jest.fn()
//         })
//       );

//       render(
//         <TestWrapper>
//           <ProductList />
//         </TestWrapper>
//       );

//       // Check if retry button has proper aria-label
//       const retryButton = screen.getByRole("button", {
//         name: /retry loading products/i
//       });
//       expect(retryButton).toBeInTheDocument();
//     });
//   });

//   describe("Component Structure", () => {
//     it("has the correct layout structure when products are loaded", () => {
//       mockUseProducts.mockReturnValue(
//         createMockUseProductsReturn({
//           data: mockProducts,
//           isLoading: false,
//           error: null,
//           refetch: jest.fn()
//         })
//       );

//       render(
//         <TestWrapper>
//           <ProductList />
//         </TestWrapper>
//       );

//       // Check for main background
//       const mainContainer = screen
//         .getByText("BEAUTY PRONOUNCED")
//         .closest("div");
//       expect(mainContainer?.parentElement).toHaveClass(
//         "min-h-screen",
//         "bg-gray-50"
//       );
//     });
//   });
// });
