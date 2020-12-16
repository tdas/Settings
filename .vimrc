set nocompatible

" Vundle
filetype on 
filetype off
set rtp+=~/.vim/vundle/
call vundle#rc()
Bundle 'SuperTab-continued.'
Bundle 'fugitive.vim' 
Bundle 'SearchComplete'
Bundle 'tComment'
Bundle 'ZoomWin'
Bundle 'rainbow_parentheses.vim'
Bundle 'derekwyatt/vim-sbt'
Bundle 'derekwyatt/vim-scala'
filetype plugin indent on

" Formatting
set tabstop=2
set shiftwidth=2
set expandtab
set autoindent
set smartindent
set nowrap
syntax on

" Navigation
set number 
set mouse=
set ruler
set ww=<,>,h,l        " wraps the cursor to next/previous line
set showcmd
set showmode

" Commands system 
set wildmenu
set wildmode=list:longest
set ignorecase 
set smartcase         " both case cmds together ensure case-sensitivity only in the presence of uppercase
set gdefault 					" make substitution always global (s/ / /g)
set incsearch
set showmatch
set hlsearch          " search cmds together make searching pretty

" Key maps
nnoremap <leader><space> :noh<cr> 	" turn off search highlights
nnoremap ; :
"nnoremap i a
nnoremap <leader>gs :Gstatus<cr>
nnoremap <leader>gd :Gdiff<cr>
nnoremap <leader>ve :sp $MYVIMRC<cr>
nnoremap <leader>vs :source $MYVIMRC<cr>
nnoremap <leader>bi :BundleInstall!<cr>
nnoremap <leader>bc :BundleClean<cr>
nmap <leader>c <C-_><C-_>
nmap <leader>cb <C-_>b
nmap <leader>cp <C-_>p
" nmap c <C-_><C-_>
" nnoremap <leader>tv :ConqueTermVSplit bash
" nnoremap <leader>th :ConqueTermSplit bash
" nnoremap <leader>t :ConqueTermVSplit bash
nnoremap <C-w><C-z> :ZoomWin<cr>
nnoremap <leader>r :RainbowParenthesesLoadRound<cr>:RainbowParenthesesLoadBraces<cr>:RainbowParenthesesLoadSquare<cr>:RainbowParenthesesToggle<cr>
set pastetoggle=<F2>

" SuperTab-continued configuration
let g:SuperTabNoCompleteAfter = ['\s',';']

" Rainbow Parenthesis configuration
au Syntax * RainbowParenthesesLoadRound
au Syntax * RainbowParenthesesLoadSquare
au Syntax * RainbowParenthesesLoadBraces
" au Syntax * RainbowParenthesesLoadChevrons

