set nocompatible

" Vundle
filetype off
set rtp+=~/.vim/vundle/
call vundle#rc()
Bundle 'SuperTab-continued.'
Bundle 'fugitive.vim' 
Bundle 'SearchComplete'
Bundle 'tComment'
" Bundle 'Conque-Shell'
Bundle 'ZoomWin'
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
set mouse=a
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
map <leader>c <C-_><C-_>
map <leader>cb <C-_>b
map <leader>cp <C-_>p
map c <C-_><C-_>
" nnoremap <leader>tv :ConqueTermVSplit bash
" nnoremap <leader>th :ConqueTermSplit bash
" nnoremap <leader>t :ConqueTermVSplit bash
nnoremap <C-w><C-z> :ZoomWin<cr>

" SuperTab-continued configuration
let g:SuperTabNoCompleteAfter = ['\s',';'] 
